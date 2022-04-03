const input = document.querySelector(".slider-inp");
const output = document.querySelector(".slider-out");
if(output && input)
{
output.textContent = input.value;
input.oninput = function () {
    output.textContent = this.value;
}
}