<script>
    import {statuses, feedbacks} from "@/store/store.js";
    const filteredStatuses = $statuses.filter(item => item.visible === true);
    const getFeedbackCount = (name) => $feedbacks.filter(item => item.status === name).length;
</script>

<div class="roadmap-wrapper">
    <div class="title">
        <h2>Roadmap</h2>
        <a href="/roadmap" class="details">View</a>
    </div>
    <div class="status-list">
        {#each filteredStatuses as status}
            <div class="status">
                <div class="status-label">
                    <span class="circle" style="background-color: {status.color}"></span>
                    {status.name}
                </div>
                <div class="count">{getFeedbackCount(status.name)}</div>
            </div>
        {/each}
    </div>
</div>

<style lang="stylus">
  .roadmap-wrapper
    background-color brand-white
    border-radius 10px
    padding 24px
    margin-bottom 24px
    .title
      display flex
      align-items center
      justify-content space-between
      margin-bottom 24px
      h2
        heading-3()
        color brand-light-navy
      a.details
        body-3()
        color brand-blue
    .status-list
      .status
        body-1()
        color brand-lighter-navy
        display flex
        align-items center
        justify-content space-between
        margin-bottom 8px
        .status-label
          position relative
          padding-left 16px
          .circle
            display inline-block
            width 8px
            height 8px
            border-radius 8px
            position absolute
            left 0
            top calc(50% - 4px)
        .count
          font-weight 700
</style>
