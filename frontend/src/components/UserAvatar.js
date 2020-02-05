import React from 'react';
import Gravatar from 'react-gravatar';

const UserAvatar = ({user}) =>(
  <React.Fragment>
  {console.log(user.email)}
    <Gravatar email= {user.email} size={200} className="rounded-full text-center inline"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.name}</div>
        <div className="text-gray-500 text-sm ">{user.email}</div>
        <div className="text-gray-500 text-base">{user.postCount}</div> 
      </div>
  </React.Fragment>
)

export default UserAvatar;
