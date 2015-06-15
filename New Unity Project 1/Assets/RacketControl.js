#pragma strict

function Start () {

}

var Accel = 5.0;
function Update () {
transform.position = new Vector3 (
    transform.position.x + Input.GetAxisRaw("Horizontal")*0.25,
    0,
    transform.position.z + Input.GetAxisRaw("Vertical")*0.25
);
}
