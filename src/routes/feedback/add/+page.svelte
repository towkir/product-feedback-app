<script>
    import {goto} from "$app/navigation";
    import {feedbacks, categories} from "@/store/store.js";
    import IconArrowHr from "@/components/vectors/IconArrowHr.svelte";
    import IconDecorationAdd from "@/components/vectors/IconDecorationAdd.svelte";
    import Select from "@/components/elements/Select.svelte";
    import {findNextValidId} from "@/scripts/helper.js";

    let feedbackFormData = {
        id: 0,
        title: '',
        category: 'Feature',
        upvotes: 0,
        status: 'Suggestion',
        description: '',
        comments: [],
    }

    function setCategory(data) {
        feedbackFormData.category = data.detail;
    }
    function addFeedback() {
        feedbackFormData.id = findNextValidId($feedbacks.map((item) => item.id));
        feedbacks.update((list) => {
            list.push(feedbackFormData);
            return list;
        });
        goto('/');
    }
</script>
<div class="feedback-form-wrapper">
    <div class="navigation">
        <a href="/" class="btn link"><IconArrowHr />Go Back</a>
    </div>
    <div class="feedback-form">
        <span class="decoration"><IconDecorationAdd /></span>
        <h1>Create New Feedback</h1>
        <label class="label" for="title">Feedback Title</label>
        <span>Add a short, descriptive headline</span>
        <input id="title" class="input" bind:value={feedbackFormData.title}>
        <label class="label">Category</label>
        <span>Choose a category for your feedback</span>
<!--        custom select component here -->
        <Select
            mode="regular"
            label=""
            value="{feedbackFormData.category}"
            options="{$categories}"
            on:select={setCategory}/>
        <label class="label" for="detail">Feedback Detail</label>
        <span>Include any specific comments on what should be improved, added, etc.</span>
        <textarea id="detail" class="input" bind:value={feedbackFormData.description}></textarea>
        <div class="action">
            <button class="btn navy">Cancel</button>
            <button class="btn primary" on:click={() => addFeedback()}>Add Feedback</button>
        </div>
    </div>
</div>

<style lang="stylus">
    .feedback-form-wrapper
      max-width 540px
      margin 0 auto
      .navigation
        margin-bottom 68px
        a
          padding-left 0
          :global(svg)
            margin-right 15px
      .feedback-form
        background-color brand-white
        padding 52px 42px 40px
        border-radius 10px
        position relative
        .decoration
          display inline-block
          line-height 0
          position absolute
          left 42px
          top -28px
        h1
          heading-1()
          color brand-light-navy
          margin-bottom 40px
        input, textarea
          margin-bottom 24px
        .action
          display flex
          align-items center
          justify-content flex-end
          gap 16px
</style>
