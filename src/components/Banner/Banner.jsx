
const Banner = () => {
    return (
        <div className="max-w-screen-lg mx-auto">
            {/* section to hold the title and button  */}
            <section className="flex mb-11 justify-between items-center">
                <h3 className="text-[#0029ff] text-2xl font-bold">Technical Project Management</h3>
                <button className="p-2 mt-5 px-3 rounded-lg text-white bg-[#0029ff]">Submit task</button>
            </section>

            {/* section  */}
            <section className="bg-[#e9ecef] p-4 text-black">
                <h4 className="text-xl mb-3 font-bold">Explore the world of management</h4>
                <p className="text-sm">As a project manager, you play an important reole in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
            </section>
        </div>
    );
};

export default Banner;