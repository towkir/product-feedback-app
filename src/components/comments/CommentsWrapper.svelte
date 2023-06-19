<script>
    import CommentCard from "@/components/comments/CommentCard.svelte";
    import {singularOrPlural} from "@/scripts/helper.js";

    export let comments = [];
</script>

<div class="comments-wrapper">
    <h3>{singularOrPlural(comments.length, 'Comment', 'Comments')}</h3>
    {#each comments as comment}
        <CommentCard comment="{comment}"/>
    {/each}
</div>

<style lang="stylus">
  .comments-wrapper
    background-color brand-white
    border-radius 10px
    padding 24px 32px
    h3
      heading-3()
      color brand-light-navy
      &:not(:last-child)
        margin-bottom 28px
</style>
