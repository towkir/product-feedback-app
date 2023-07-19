<script>
    export let feedbackId;
    import MessageCreateCard from "@/components/comments/MessageCreateCard.svelte";
</script>

<div class="create-comment-wrapper">
    <h3>Add Comment</h3>
    <MessageCreateCard role="comment" feedbackId="{feedbackId}"/>
</div>

<style lang="stylus">
  .create-comment-wrapper
    background-color brand-white
    border-radius 10px
    padding 24px 32px
    h3
      heading-3()
      color brand-light-navy
      margin-bottom 24px

  @media screen and (max-width: 570px)
    .create-comment-wrapper
      padding 24px
</style>
