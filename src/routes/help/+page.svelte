<script lang="ts">
	import { Table } from 'sveltestrap/src';
</script>

<h1>도움말</h1>
<h2>설정</h2>
<h3>준비물</h3>
<ul>
	<li>Chrome (크로미움을 사용하는 브라우저는 모두 가능)</li>
	<li>
		<a
			href="https://chrome.google.com/webstore/detail/%EB%B0%B1%EC%A4%80%ED%97%88%EB%B8%8Cbaekjoonhub/ccammcjdkpgjmcpijpahlehmapgmphmk?hl=ko"
			>백준허브 Chrome Extension</a
		>
	</li>
	<li>Github</li>
</ul>

<h3>방법</h3>
<ol>
	<li>백준허브 설치</li>
	<li>Github 계정 연동</li>
	<li>Repository 연동 <b>반드시 Public Repo로 만들 것</b></li>
	<li>
		해당 Repository 접속 후 <b>Settings - Webhook - Add webhook</b>
	</li>
	<Table>
		<thead>
			<tr>
				<th>Payload URL</th>
				<th>Content Type</th>
				<th>Trigger</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>http://ebdj.duckdns.org:8888/api/webhook/push</td>
				<td>application/json</td>
				<td>Just the push event.</td>
			</tr>
		</tbody>
	</Table>
</ol>

<h2>규칙</h2>
<ol>
	<li>매일 한 문제 이상 문제를 푸는 것으로 한다.</li>
	<ol type="a">
		<li>토요일, 일요일, 공휴일은 제외한다.</li>
		<li>문제의 난이도는 상관없다.</li>
		<li>이를 어길 시, 벌금 500원을 입금해야한다.</li>
	</ol>
	<li>문제 풀이가 힘들 경우, 그 전날까지 미리 말을 하면 벌금에서 제외한다.</li>
	<li>한달마다 정기 모임을 가지며 모인 벌금은 지원금으로 사용할 예정이다.</li>
</ol>
