<script>
    import FeedbackCard from "@/components/feedback/FeedbackCard.svelte";
    export let data;
</script>

<div class="container">
    <FeedbackCard feedback="{data}" clickable="{false}"/>
</div>

<style lang="stylus">
    .container
      width 730px
      margin 0 auto
</style>
