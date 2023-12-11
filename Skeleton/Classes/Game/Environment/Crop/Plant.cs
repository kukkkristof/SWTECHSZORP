namespace SZORPClasses.Classes.Game.Environment.Crop;

public class Plant : Crop
{
    public override void PassTime(float time) { }

    protected override void Grow() { }

    protected override bool DoGrow() { return true; }

    public override Item.Item[]? Collect() { return CollectItem; }

    public override void DoPlant() { }
}