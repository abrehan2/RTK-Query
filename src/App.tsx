// IMPORTS -
import { useGetPostsQuery } from "./redux/api"

const App = () => {

  const {isLoading, isError, isSuccess, data, error} = useGetPostsQuery("");
 

  console.log(isLoading, isError, isSuccess, data, error);

  return (
    <>
     App
    </>
  )
}

export default App
