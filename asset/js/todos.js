$("input").keypress(function(event) {
	if(event.which === 13) {
		if($(this).val()==="") return;
		// $("ul").prepend($("<li>").text($(this).val()));
		$("ul").prepend("<li><span class='left'><i class='fa fa-trash'></i></span>  "+$(this).val()+"<span class='right'><i class='fa fa-pencil'></li>");
		$(this).val("");
	}
});

$(".fa-plus").on("click", function() {
	$("input").slideToggle();
});

$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span.left", function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click", "span.right", function(event) {
	var newVal = prompt("Enter the edited text!");
	if(newVal === "") {
		event.stopPropagation();
		return;
	}
	$(this).parent().html("<span class='left'><i class='fa fa-trash'></i></span>  "+newVal+"<span class='right'><i class='fa fa-pencil'>");
	event.stopPropagation();
});