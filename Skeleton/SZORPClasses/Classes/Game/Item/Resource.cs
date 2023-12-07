namespace SZORPClasses.Classes.Game.Item;

public class Resource
{
    
    private bool _cookable;
    private Item _cookItem;
    private bool _refinable;
    private Item _refiningRequirements;
    private Item _refinedItem;

    public Item Cook() { return _cookItem; }
    public Item Refine(Item RefiningResource) { return _refinedItem; }

}