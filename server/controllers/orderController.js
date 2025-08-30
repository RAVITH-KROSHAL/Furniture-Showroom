import Order from "../models/Order.js";

// Create new order
export const addOrderItems = async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, totalPrice } = req.body;

  if (!orderItems || orderItems.length === 0) {
    res.status(400).json({ message: "No order items" });
    return;
  }

  const order = new Order({
    orderItems, user: req.user._id, shippingAddress,
    paymentMethod, itemsPrice, shippingPrice, totalPrice,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

// Get logged in user orders
export const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

// Get order by ID
export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate("user", "name email");
  if (order) res.json(order);
  else res.status(404).json({ message: "Order not found" });
};

// Update order to paid
export const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = req.body;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else res.status(404).json({ message: "Order not found" });
};

// Update order to delivered
export const updateOrderToDelivered = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else res.status(404).json({ message: "Order not found" });
};

// Admin: Get all orders
export const getOrders = async (req, res) => {
  const orders = await Order.find({}).populate("user", "id name email");
  res.json(orders);
};
