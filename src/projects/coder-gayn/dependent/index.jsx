import { useGetCommentsByPostId, useGetPostById } from "../apiServices"


const CGDependent = () => {

    const { data: post, isLoading, isError, error } = useGetPostById('p1');

    const commentId = post?.commentId;

    const { data: comments, isLoading: isCmtLoading } = useGetCommentsByPostId(commentId);


    if (isLoading) return <div className='dataFetchingStatus'>Loading...</div>;
    if (isError) return <div className='dataFetchingStatus'>Error: {error.message}</div>;


    return (
        <div className='h-screen p-4 bg-slate-700 text-slate-300'>

            <div className="w-[900px] mx-auto p-2 rounded border border-slate-500">
                <h2 className="text-2xl text-center">Dependent Query</h2>

                <div className="text-xl text-center p-2 mt-2">
                    {
                        post?.title
                    }
                </div>

                <div className="text-center mt-4">
                    <p className="text-xl">Comments:-</p>

                    {
                        isCmtLoading
                            ? (
                                <div className="text-2xl text-green-500">
                                    Comment loading...
                                </div>
                            ) : (
                                <div className="text-xl">
                                    {
                                        comments.comments.map(obj =>

                                            <p key={obj.id}>
                                                {obj?.title}
                                            </p>
                                        )
                                    }
                                </div>
                            )
                    }
                </div>
            </div>


        </div>
    )
}

export default CGDependent