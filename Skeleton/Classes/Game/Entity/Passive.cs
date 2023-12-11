namespace SZORPClasses.Classes.Game.Entity;

public class Passive : Entity
{
    private bool _fleeing;

    private float _fleeTime;
    private float _passedFleeTime;

    private void Flee(Entity from) { }

    public override Item.Item[] TakeDamage()
    {
        return null;
    }

    public override void PassTime(float time) { }
}