#pragma strict

function Start () {

}

var Accel = 10000.0;
function Update () {
  rigidbody.AddForce(
    transform.right * Input.GetAxisRaw( "Horizontal" ) * Accel,
    ForceMode.Impulse
  );
}
