<script>
    import {goto} from "$app/navigation";
    import {feedbacks, comments} from "@/store/store.js";
    import IconArrowUp from "@/components/vectors/IconArrowVr.svelte";
    import IconChatBubble from "@/components/vectors/IconChatBubble.svelte";

    export let feedback;
    export let clickable = true;
    function navigateToDetailsPage(id) {
        if (clickable) {
            goto(`/feedback/view/${id}`)
        }
    }
    function addOrRemoveUpvote() {
        const adjustVotesBy = feedback.voted ? -1 : +1;
        feedback.upvotes += adjustVotesBy;
        feedback.voted = !feedback.voted;
        let currentFeedbackIndex = $feedbacks.findIndex((item) => item.id === feedback.id);
        $feedbacks.splice(currentFeedbackIndex, 1, feedback)
        feedbacks.set($feedbacks);
    }

    $: commentsInThisFeedback = $comments.filter((item) => item.feedbackId === feedback.id);
</script>

<div class="feedback-card" on:click={() => navigateToDetailsPage(feedback.id)}>
    <div class="votes" class:active="{feedback.voted}" on:click|stopPropagation={() => addOrRemoveUpvote()}>
        <IconArrowUp />
        <span class="vote-count">{feedback.upvotes}</span>
    </div>
    <div class="contents">
        <div class="details">
            <h3>{feedback.title}</h3>
            <p>{feedback.description}</p>
            <span class="tag" on:click|stopPropagation={() => {}}>{feedback.category}</span>
        </div>
        <div class="comments">
            <IconChatBubble />
            <span class="comment-count">{commentsInThisFeedback.length}</span>
        </div>
    </div>
</div>

<style lang="stylus">
  .feedback-card
    background-color brand-white
    padding 28px 32px
    margin-bottom 20px
    border-radius 10px
    display flex
    align-items flex-start
    gap 40px
    cursor pointer

    &:hover
      .contents
        .details
          h3
            color brand-blue

    .votes
      background-color brand-grey
      padding 12px 9px 8px 9px
      border-radius 10px
      box-sizing border-box
      min-width 40px
      display flex
      flex-direction column
      align-items center
      gap 8px
      cursor pointer
      transition background-color 0.3s ease-in-out

      &.active
        background-color brand-blue

        :global(svg path)
          stroke brand-white

        span
          color brand-white

      &:not(.active):hover
        background-color brand-light-blue

      :global(svg path)
        stroke brand-blue

      span
        body-3()
        color brand-light-navy

    .contents
      flex-grow 1
      display flex
      align-items center
      justify-content space-between

      .details
        h3
          heading-3()
          color brand-light-navy
          margin-bottom 4px
          transition color 0.3s ease-in-out

        p
          body-1()
          color brand-lighter-navy
          margin-bottom 12px

        :global(span.tag)
          margin 0

      .comments
        display flex
        align-items center

        .comment-count
          heading-3()
          color brand-light-navy
          margin-left 8px
</style>
