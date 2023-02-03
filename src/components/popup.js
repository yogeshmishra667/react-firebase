import Swal from 'sweetalert2';
import { deleteDoc, doc } from 'firebase/firestore';
import { DB } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Popup = ({ id }) => {
  console.log(id);
  const navigate = useNavigate();
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      deleteDoc(doc(DB, 'student', id)).then(() => {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        navigate('/');
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
    }
  });
};

export default Popup;
