namespace SZORPClasses.Classes.Game.Environment.Crop;
using Item;
public abstract class Crop : TimedObject
{
    public string? Name;
    public string? Description;
    protected float GrowthRate;
    protected Item[]? CollectItem;
    public bool Adult;

    protected abstract void Grow();

    protected abstract bool DoGrow();

    public abstract Item[]? Collect();

    public abstract void DoPlant();

}