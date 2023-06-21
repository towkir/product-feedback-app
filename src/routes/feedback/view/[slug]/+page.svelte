<script>
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    import NavHeader from "@/components/NavHeader.svelte";
    import CommentsWrapper from "@/components/comments/CommentsWrapper.svelte";
    import CommentCreateCard from "@/components/comments/CommentCreateCard.svelte";
    export let data;
</script>

<div class="container">
    <NavHeader showEditButton="{true}"/>
    <FeedbackCard feedback="{data}" clickable="{false}" />
    <CommentsWrapper comments="{data.comments}"/>
    <CommentCreateCard feedbackId="{data.id}"/>
</div>

<style lang="stylus">
    .container
      width 730px
      margin 0 auto
      :global(.feedback-card)
        margin-bottom 24px
</style>
