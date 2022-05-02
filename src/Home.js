import { useState } from "react"
import BlogList from "./blogList";


const Home = () => {

    const [blogs, setBlogs]  = useState([
        {title: 'My new Website', body: 'this is a website of my experience', author: 'naima', id : 1},
        {title: 'Welcome party!', body: 'the destruction is important', author: 'mabrouka', id : 2},
        {title: 'Web dev top tips', body: 'im trying to use react', author: 'mounir', id : 3}
    ]);
   
   
    return ( 
        <div className="home">
            <BlogList list= {blogs} title = "All Title!"/>
        </div>
     );
}
 
export default Home;