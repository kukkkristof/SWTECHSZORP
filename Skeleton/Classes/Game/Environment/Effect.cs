namespace SZORPClasses.Classes.Game.Environment;

public class Effect : TimedObject
{
    
    private float[] _multipliers;
    private float _length;
    public float RemainingTime => _length - PassedTime;
    
    public override void PassTime(float time) { }

    public void RemoveEffect(Entity.Entity ent) { }

    public void ApplyEffect(Entity.Entity ent) { }

}