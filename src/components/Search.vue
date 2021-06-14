<template>
	<p class="control has-icons-left">
		<input
			class="input is-rounded"
			type="text"
			v-model="value"
			placeholder="Search"
			@keyup="search(value)"
		>
		<span class="icon is-small is-left">
			<i class="fa fa-search"></i>
		</span>
	</p>
</template>

<style scoped>
  .control {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height:100%;
      border: 2.5px solid lightgrey;
      border-radius: 25px;
      padding: 8px
      
    }
    input{
        flex: 1;
        height: 1.5rem;
        border: none;
    }
    input:focus  {
        border:none;
        outline: none;
    }
    .icon {
        border: none;
        color:lightgrey;
        font-size: 18px;
    }
    ::placeholder {
        color: lightgrey;
        font-size: 18px;
    }
</style>