function Profile() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="bg-slate-800 p-10 rounded-3xl text-center">
        <img
          src="https://plus.unsplash.com/premium_vector-1711574973371-0979def97d13?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="profile"
          className="w-28 h-28 rounded-full mx-auto mb-5"
        />

        <h2 className="text-2xl font-bold">Ayu</h2>
        <p className="text-gray-400">Frontend Developer</p>
      </div>
    </div>
  );
}

export default Profile;
