const Education = () => {
    return (
        <section id="education" className="py-16 px-6 bg-gray-50">
            <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

            <div className="max-w-3xl mx-auto border-l-4 border-green-600 pl-6 space-y-10">
                <div>
                    <h3 className="text-xl font-semibold">B.Tech in CSE</h3>
                    <p className="text-sm text-gray-500">Bansal Institute of Science & Technology, Bhopal</p>
                    <p className="mt-1 text-gray-600">CGPA: 6.78 (Till 6th Sem)</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Class XII</h3>
                    <p className="text-sm text-gray-500">Little Step H.S. School, Borgaon</p>
                    <p className="mt-1 text-gray-600">85.6% (2022)</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">Class X</h3>
                    <p className="text-sm text-gray-500">Little Step H.S. School, Borgaon</p>
                    <p className="mt-1 text-gray-600">80.33% (2020)</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
