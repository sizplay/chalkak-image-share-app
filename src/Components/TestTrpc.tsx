import { trpcClient } from "@/lib/trpc-client";


const TestTrpc = () => {
	//    const data= trpc.hello.useQuery({ text: "trpc" });
	return (
		<button
			onClick={async () => {
				const result = await trpcClient.insertImage.mutate([
					{ albumId: 1, path: "23423423/234234234/234234" },
					{ albumId: 1, path: "111/222/333" }
				]
				)
				console.log(result);
			}}
		>
			trpc 테스트(서버 쪽 콘솔 로그도 확인)
		</button >
	)
}

export default TestTrpc