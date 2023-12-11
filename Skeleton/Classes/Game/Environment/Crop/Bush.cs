namespace SZORPClasses.Classes.Game.Environment.Crop;
using Item;


public class Bush : Crop
{

    private int _collectTimes;
    private int _harvestStage;
    
    public override void PassTime(float time) { }
    
    protected override void Grow() { }

    protected override bool DoGrow() { return true; }

    public override Item[]? Collect() { return CollectItem; }

    public override void DoPlant() { }
}