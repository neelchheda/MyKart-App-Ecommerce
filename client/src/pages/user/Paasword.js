import React,{useState} from 'react'
import UserNav from '../../components/nav/UserNav'
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const Password = () => {
    const [password,setPassword]=useState('');
    const [loading,useLoading]=useState(false);


    const passwordUpdateForm =()=>{
        <form>
            from
        </form>
    }
  return(
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2'>
            <UserNav />
          </div>
            <div className='col'>Password Update Page</div>
        </div>

    </div>
  );
};

export default Password