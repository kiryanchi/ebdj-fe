<script lang="ts">
	import { Table } from 'sveltestrap/src';
</script>

<div class="flex flex-col">
	<h1 class="text-6xl self-center">도움말</h1>

	<ol class="list-decimal">
		<li class="text-4xl">
			<h2 class="text-4xl">설정</h2>
			<div class="my-4">
				<h3 class="text-3xl">준비물</h3>
				<ul class=" text-base list-disc list-inside">
					<li>Chrome (크로미움을 사용하는 브라우저는 모두 가능)</li>
					<li>
						<a
							class="hover:text-blue-400"
							href="https://chrome.google.com/webstore/detail/%EB%B0%B1%EC%A4%80%ED%97%88%EB%B8%8Cbaekjoonhub/ccammcjdkpgjmcpijpahlehmapgmphmk?hl=ko"
							>백준허브 Chrome Extension</a
						> (클릭 시 이동합니다.)
					</li>
					<li>Github</li>
				</ul>
			</div>
			<div class="my-4">
				<h3 class="text-3xl">방법</h3>
				<ol class="text-base list-decimal list-inside">
					<li>백준허브 설치</li>
					<li>Github 계정 연동</li>
					<li>Repository 연동 <b>반드시 Public Repo로 만들 것</b></li>
					<li>
						해당 Repository 접속 후 <b>Settings - Webhook - Add webhook</b>
					</li>
					<Table bordered class="border-[2px] border-black text-center my-2">
						<tbody>
							<th>Payload URL</th>
							<td class="text-left">http://ebdj.duckdns.org:8888/api/webhook/push</td>
						</tbody>
						<tbody>
							<th>Content Type</th>
							<td class="text-left">application/json</td>
						</tbody>
						<tbody>
							<th>Trigger</th>
							<td class="text-left">Just the push event.</td>
						</tbody>
					</Table>
				</ol>
			</div>
		</li>

		<li class="text-4xl">
			<h2 class="text-4xl">규칙</h2>
			<div class="text-base my-2">
				<ol class="list-decimal">
					<li>매일 한 문제 이상 문제를 푸는 것으로 한다.</li>
					<ol class="list-disc list-inside">
						<li>토요일, 일요일, 공휴일은 제외한다.</li>
						<li>문제의 난이도는 상관없다.</li>
						<li>이를 어길 시, 벌금 500원을 입금해야한다.</li>
					</ol>
					<li>문제 풀이가 힘들 경우, 그 전날까지 미리 말을 하면 벌금에서 제외한다.</li>
					<li>한달마다 정기 모임을 가지며 모인 벌금은 지원금으로 사용할 예정이다.</li>
				</ol>
			</div>
		</li>
	</ol>
</div>
