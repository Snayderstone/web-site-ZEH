<script lang="ts">
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { Feature, BlogPost } from '$lib/utils/types';

	export let data: {
		features: Feature[];
		posts: BlogPost[];
	};

	let { features, posts } = data;
</script>

<div class="container">
	<ContentSection title="About">
	</ContentSection>

	<Features {features} />

	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
</div>
