<script lang="ts">
	import type { PageData } from './$types';
	import { Card, Col, Container, Row } from 'sveltestrap/src';

	export let data: PageData;
</script>

<div class="">
	<div class="flex justify-between w-[50%] text-4xl ml-[25%] mb-4">
		<p>◁</p>
		<p class="font-bold underline">{data.date}</p>
		<p>▷</p>
	</div>

	<Card body class="font-bold text-center mb-4">
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

	<Card body class="font-bold text-center">
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
</div>

<style>
</style>
