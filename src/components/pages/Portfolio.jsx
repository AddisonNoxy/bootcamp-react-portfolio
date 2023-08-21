export default function Portfolio() {
    return (
        <section className="mx-auto bg-cyan-400 p-10">
            <h1 className="text-3xl text-black text-center font-bold pb-4">Developer Portfolio</h1>

            <div className="grid grid-cols-3 gap-4 justify-items-center">
                <div className="card bg-cyan-600 w-96 text-center text-black pb-4">
                    <figure><img src="../../../assets/bootcamp-planner.png"></img></figure>
                    <h1 className="text-xl font-bold underline hover:text-gray-600"><a href="https://github.com/AddisonNoxy/bootcamp-day-planner">Day Planner</a></h1>
                    <p>A work day scheduler, created as part of the webdev bootcamp.</p>
                </div>
                <div className="card bg-cyan-600 w-96 text-center text-black pb-4">
                    <figure><img src="../../assets/coding-quiz.png"></img></figure>
                    <h1 className="text-xl font-bold underline hover:text-gray-600"><a href="https://github.com/AddisonNoxy/bootcamp-code-quiz">Javascript Coding Quiz</a></h1>
                    <p>An early assignment from the coding bootcamp, meant for a simple knowledge check on JavaScript.</p>
                </div>
                <div className="card bg-cyan-600 w-96 text-center text-black pb-4">
                    <figure><img src="../../assets/database-viewer.png" className="max-h-48"></img></figure>
                    <h1 className="text-xl font-bold underline hover:text-gray-600"><a href="https://github.com/AddisonNoxy/database-viewer">Database Viewer</a></h1>
                    <p>A utility for connecting to and checking with the information in a database, with files for seeding an initial example database.</p>
                </div>
                <div className="card bg-cyan-600 w-96 text-center text-black pb-4">
                    <figure><img src="../../assets/movie-forum.png"></img></figure>
                    <h1 className="text-xl font-bold underline hover:text-gray-600"><a href="https://github.com/FelixW01/movie-forum-app">Movie Forum</a></h1>
                    <p>A collaborative project for viewing upcoming movies and allowing users to login and post comments.</p>
                </div>
                <div className="card bg-cyan-600 w-96 text-center text-black pb-4">
                    <figure><img src="../../assets/svg-maker.png"></img></figure>
                    <h1 className="text-xl font-bold underline hover:text-gray-600"><a href="https://github.com/AddisonNoxy/svg-maker">SVG Maker</a></h1>
                    <p>A small utility for generating SVG images using the terminal.</p>
                </div>
                <div className="card bg-cyan-600 w-96 text-center text-black pb-4">
                    <figure><img src="../../assets/sports-companion.png"></img></figure>
                    <h1 className="text-xl font-bold underline hover:text-gray-600"><a href="https://github.com/Dinh282/sports-companion">Sports Companion</a></h1>
                    <p>A collaborative project for seeing information on different sports teams and upcoming games.</p>
                </div>
            </div>
        </section>
    )
}