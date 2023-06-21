<script>
    import Sidebar from "@/components/Sidebar.svelte";
    import Header from "@/components/Header.svelte";
    import NoFeedbackFound from "@/components/feedback/NoFeedbackFound.svelte";
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    import {feedbacks} from "@/store/store.js";
    import {comments} from "@/store/store.js";
    import {onMount} from "svelte";

    let sortBy = 'upvotes'; // or 'comments'
    let sortIn = 'descending' // or 'ascending'
    let filterBy = 'All'; // or any of the categories

    let sortLabel = 'Most Upvotes';
    let sortLabels = [
        'Most Upvotes',
        'Least Upvotes',
        'Most Comments',
        'Least Comments',
    ];

    function sortFeedbacks(event) {
        sortLabel = event.detail;
        const sortOptions = {
            Most: 'descending',
            Least: 'ascending',
        };
        const sortKeys = {
            Upvotes: 'upvotes',
            Comments: 'commentCount',
        };
        const options = event.detail.split(' ');
        sortBy = sortKeys[options[1]];
        sortIn = sortOptions[options[0]];
    }

    let feedbacksWithCommentCount = [];
    function filterFeedbacks(event) {
        filterBy = event.detail;
    }

    $: feedbacksFiltered = filterBy !== 'All' ? feedbacksWithCommentCount
        .filter((item) => item.category === filterBy) : feedbacksWithCommentCount;
    $: feedbacksFilteredAndSorted = feedbacksFiltered
        .sort((a, b) => sortIn === 'ascending' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]);
    onMount(() => {
        for (let i = 0; i < $feedbacks.length; i += 1) {
            $feedbacks[i].commentCount = $comments.filter((item) => item.feedbackId === $feedbacks[i].id).length;
        }
        feedbacksWithCommentCount = $feedbacks;
    })
</script>

<div class="container">
    <Sidebar selectedCategory="{filterBy}" on:categorySelection={filterFeedbacks}/>
    <main>
        <Header
            feedbackCount="{feedbacksFilteredAndSorted.length}"
            sortValue="{sortLabel}"
            sortOptions="{sortLabels}"
            on:sortFeedbacks={sortFeedbacks}
        />
        {#if feedbacksFilteredAndSorted.length > 0}
            {#each feedbacksFilteredAndSorted as feedback}
                <FeedbackCard {feedback} />
            {/each}
        {:else}
            <NoFeedbackFound />
        {/if}
    </main>
</div>

<style lang="stylus">
  .container
    width 1110px
    margin 0 auto
    display flex
    gap 30px
    main
      flex-grow 1
</style>
