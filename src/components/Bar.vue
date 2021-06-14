<template>
	
		<div class="menu">
			<span class="menu_box">
				<i class="fa fa-user-plus"></i>
				<span>Sign Up</span>
            </span>
			<span class="menu_box">
				<i class="fa fa-user"></i>
				<span>Sign In</span>
            </span>
		</div>
		
	
</template>

<style scoped>
    .menu{
        display:flex;
        justify-content: space-between;
        align-items: center;
        height:100%;
        margin-right :0.8rem;

    }

    .menu_box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45%;
        border: 1px solid black;
        border-radius: 5px;
        height: 100%;
    }
    .fa {
        margin-right: 6px;
    }
</style>
