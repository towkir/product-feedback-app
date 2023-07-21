<script>
    import Sidebar from "@/components/Sidebar.svelte";
    import Header from "@/components/Header.svelte";
    import NoFeedbackFound from "@/components/feedback/NoFeedbackFound.svelte";
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    import {feedbacks, comments} from "@/store/store.js";
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

    let dataLoaded = false;

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
    onMount(() => { // needed for sorting with comments
        for (let i = 0; i < $feedbacks.length; i += 1) {
            $feedbacks[i].commentCount = $comments.filter((item) => item.feedbackId === $feedbacks[i].id).length;
        }
        feedbacksWithCommentCount = $feedbacks;
        dataLoaded = true;
    })
</script>

<div class="container">
    <Sidebar selectedCategory="{filterBy}" on:categorySelection={filterFeedbacks}/>
    <main>
        <Header
            feedbackCount="{feedbacksFilteredAndSorted.length > 0}"
            sortValue="{sortLabel}"
            sortOptions="{sortLabels}"
            on:sortFeedbacks={sortFeedbacks}
        />
        {#if feedbacksFilteredAndSorted.length > 0}
            {#each feedbacksFilteredAndSorted as feedback}
                <FeedbackCard {feedback} />
            {/each}
        {:else if (dataLoaded)}
            <NoFeedbackFound />
        {/if}
    </main>
</div>

<style lang="stylus">
  .container
    width calc(100% - 80px)
    max-width 1110px
    margin 95px auto
    display flex
    gap 30px
    main
      flex-grow 1
  @media screen and (max-width: 768px)
    .container
      max-width unset
      margin 56px auto
      flex-direction column
</style>
