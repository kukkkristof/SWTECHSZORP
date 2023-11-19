namespace SZORP.Scripts.Classes.Items;

public class Item
{
    public enum ItemType
    {
        Resource,
        Food,
        Weapon,
        Tool,
        Armor,
        Seed
    }

    private ItemType _type;
    private int _stackCount, _quantity;

    private string _name;
    private string _description;

    public string getName => _name;
    public string getDescription => _description;

    public Item() : base(){}

    public Item(ItemType type) : base()
    {
        this._type = type;
    }

    public Item(string name, string description, int stackCount, int quantity, ItemType type)
    {
        _name = name;
        _description = description;
        _stackCount = stackCount;
        _quantity = quantity;
        _type = type;
    }

}