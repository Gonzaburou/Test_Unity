#pragma strict

var Speed = 2.0;
function Start () {
	rigidbody.AddForce(( transform.forward + transform.right ) * Speed,ForceMode.VelocityChange );
}

function Update () {
	transform.position = new Vector3 (
    	transform.position.x + 1 * Time.time/100,
    	0,
    	transform.position.z + 1 * Time.time/100
    	);
	Debug.Log(Time.time);
}