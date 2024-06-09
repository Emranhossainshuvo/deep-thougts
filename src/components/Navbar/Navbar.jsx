import './navbar.css'


const Navbar = () => {
    return (
        <>
            <div className="navbar bg-[#f0f0f0]">
                <div className="flex-1">
                    <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="" />
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <img src="https://i.ibb.co/YjhFYk9/icons8-home-24.pngf" alt="" />
                            </div>
                        </div>
                        <div tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <img src="https://i.ibb.co/zJXyXsX/icons8-settings-24.png" alt="" />
                            </div>
                        </div>
                        <div tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <img src="https://i.ibb.co/4SZq2jG/icons8-notification-24.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="dropdown dropdown-end flex items-center gap-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/93DgzVn/female-doctor-hospital.png" />
                            </div>
                        </div>
                        <div tabIndex={0}>
                            <div className="menu-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;