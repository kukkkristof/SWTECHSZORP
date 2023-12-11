namespace SZORPClasses.Classes.Game.Environment;

public abstract class TimedObject
{
    
    protected int Id;
    protected float PassedTime;

    public abstract void PassTime(float time);
    
}