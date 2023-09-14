import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons';
import QuizChallenge from './components/QuizChallenge';
import RuffWork from './components/RuffWork';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import ReactQueryPractice from './components/ReactQuery';
const POSTS = [
  {id:1, title:"POST 1"},{id:2, title:"POST 2"}]
/* 
Static things in URL should be in double Quotes,otherwise in objects or simple
posts -> posts
posts/1 -> ["posts", 1]
posts/authorId = 1 -> ["posts", {authorId:1}]
posts/2/comments -> ["posts", post.id,"comments"]
*/
function App() {
const twiceUnary = (binary) =>{
  return (b) => {
    binary(b)
    binary(b)
  }
}
const twice = (binary) =>{
  return (...b) => {
    binary(...b)
    binary(...b)
  }
}
const double = (b) =>{
  twiceUnary((b)=> b * 2)
}
const square = (a) =>{
  twiceUnary((b)=> b * b)
}
  return (
    <div className="App">
   
    </div>
  );
}

//if you want to slow your network time.


export default App;
//you can do two things from React Query :
// 1. Query - Getting data from somewhere else.
// 2. Mutation - Changing the fetched Data. - create.