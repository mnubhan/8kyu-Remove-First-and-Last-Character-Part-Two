function array(string) {
  return string.length < 3 ? null : string.split(",").length<3?null:string.split(",").slice(1,string.split(",").length-1).join(" ")
}
