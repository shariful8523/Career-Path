import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {

    const { user, LogOut } = useContext(AuthContext);
    return (
        <div>
            <nav class="bg-white shadow-lg fixed w-full py-2 z-50 ">
                <div class="container mx-auto flex items-center justify-between px-4 py-3">

                    <div class="text-xl font-bold text-blue-600">
                        <a href="/">Career Path</a>
                    </div>

                    {/* className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-700 hover:text-blue-600 font-medium"
                            } */}


                    <div class="hidden md:flex space-x-6">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-700 hover:text-blue-600 font-medium"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/About"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-700 hover:text-blue-600 font-medium"
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-medium"
                                    : "text-gray-700 hover:text-blue-600 font-medium"
                            }
                        >
                            My Profile
                        </NavLink>

                    </div>


                    <div class="flex items-center space-x-4">

                        <div id="user-logged-in" class="hidden md:flex items-center space-x-4">
                            <div class="relative group">
                                <img src="https://via.placeholder.com/40" alt="User" class="w-10 h-10 rounded-full cursor-pointer"></img>
                                <span class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs py-1 px-3 rounded">
                                    John Doe
                                </span>
                            </div>
                        </div>

                        <div id="user-not-logged-in" class="hidden md:flex">

                            {
                                user && user.email ? (
                                    <button
                                        onClick={LogOut}
                                        className="text-red-500 hover:text-red-700 font-medium"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <NavLink
                                        to="/auth/login"
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        
                                    >
                                        Login
                                    </NavLink>
                                )
                            }


                        </div>

                    </div>

                </div>
            </nav>

        </div>
    );
};

export default Navbar;