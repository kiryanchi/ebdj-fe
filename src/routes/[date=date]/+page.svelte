<script lang="ts">
	import type { PageData } from './$types';
	import { Card, Col, Container, Row } from 'sveltestrap/src';

	export let data: PageData;
</script>

<h1>{data.date} 문제 풀이!!</h1>

<Card body>
	<Container>
		<Row>
			<Col>
				<h4>이름</h4>
			</Col>
			<Col>
				<h4>실천 여부</h4>
			</Col>
		</Row>
	</Container>
	<Container>
		{#each [...data.solvingByUser] as [name, solving]}
			<Row>
				<Col>
					{name}
				</Col>
				<Col>
					{#if solving.length != 0}
						<p>✅</p>
					{:else}
						<p>❌</p>
					{/if}
				</Col>
			</Row>
		{/each}
	</Container>
</Card>

<Card body>
	<Container>
		<Row>
			<Col>
				<h4>이름</h4>
			</Col>
			<Col>
				<h4>풀었던 문제</h4>
			</Col>
		</Row>
	</Container>
	<Container>
		{#each [...data.solvingByUser] as [name, solvings]}
			<Row>
				<Col>
					{name}
				</Col>
				<Col>
					{#if solvings.length != 0}
						{#each solvings as { date, difficulty, title, url }}
							<a href={url}><p>{`${difficulty} ${title}`}</p></a>
						{/each}
					{:else}
						<p>❌</p>
					{/if}
				</Col>
			</Row>
		{/each}
	</Container>
</Card>

<style>
</style>
