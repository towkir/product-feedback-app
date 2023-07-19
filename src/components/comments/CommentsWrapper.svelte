<script>
    import CommentViewCard from "@/components/comments/CommentViewCard.svelte";
    import {singularOrPlural} from "@/scripts/helper.js";

    export let comments = [];
</script>

<div class="comments-wrapper">
    <h3>{singularOrPlural(comments.length, 'Comment', 'Comments')}</h3>
    {#each comments as comment}
        <CommentViewCard comment="{comment}"/>
    {/each}
</div>

<style lang="stylus">
  .comments-wrapper
    background-color brand-white
    border-radius 10px
    padding 24px 32px
    margin-bottom 24px
    h3
      heading-3()
      color brand-light-navy
      &:not(:last-child)
        margin-bottom 28px
  @media screen and (max-width: 570px)
    .comments-wrapper
      padding 24px
</style>
