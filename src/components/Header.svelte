<script>
    import IconLightBulb from "@/components/vectors/IconLightBulb.svelte";
</script>

<header>
    <div class="feedback-info">
        <IconLightBulb/>
        <h3>0 Suggestions</h3>
        <div class="sort-by">
            Sort By:
        </div>
    </div>
    <button class="btn primary">+ Add Feedback</button>
</header>

<style lang="stylus">
    header
      background-color brand-navy
      padding 14px 16px
      margin-bottom 24px
      border-radius 10px
      display flex
      align-items center
      justify-content space-between
      color brand-white
      .feedback-info
        padding-left 10px
        display flex
        align-items center
        :global(svg)
          margin-right 16px
        h3
          heading-3()
</style>
