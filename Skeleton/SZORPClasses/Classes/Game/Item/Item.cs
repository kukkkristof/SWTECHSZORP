namespace SZORPClasses.Classes.Game.Item;

public class Item
{
    public string Name;
    public int Count;
    protected int StackCount;
    protected int Id;
    public string Description;

    public void AddToInventory() { }

    public void RemoveItem() { }

    public void DecreaseCount(int count) { }

    public void IncreaseCount(int count) { }

}