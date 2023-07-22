<script>
    import {comments} from "@/store/store.js";
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    import NavHeader from "@/components/NavHeader.svelte";
    import CommentsWrapper from "@/components/comments/CommentsWrapper.svelte";
    import CommentCreateCard from "@/components/comments/CommentCreateCard.svelte";
    export let data;
    $: commentsInCurrentFeedback = $comments.filter((item) => item.feedbackId === data.id);
</script>

<div class="container" role="main">
    <NavHeader showEditButton="{true}"/>
    <FeedbackCard feedback="{data}" clickable="{false}" />
    <CommentsWrapper comments="{commentsInCurrentFeedback}"/>
    <CommentCreateCard feedbackId="{data.id}"/>
</div>

<style lang="stylus">
  .container
    width calc(100% - 80px)
    max-width 730px
    margin 80px auto
    :global(.feedback-card)
      margin-bottom 24px
  @media screen and (max-width: 570px)
    .container
      width calc(100% - 48px)
      margin 24px auto
</style>
