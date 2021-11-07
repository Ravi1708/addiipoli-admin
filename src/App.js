// import "bootstrap-css-only/css/bootstrap.min.css";
import React from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./screens/Dashboard";
import CustomerDetails from "./screens/CustomerDetails";
import ViewCustomerDetails from "./screens/ViewCustomerDetails";
import AddHub from "./screens/AddHub";
import HubDetails from "./screens/HubDetails";
import OngoingOrder from "./screens/OngoingOrder";
import RejectOrder from "./screens/RejectOrder";
import ViewRejectOrder from "./screens/ViewRejectOrder";
import CompletedOrder from "./screens/CompletedOrder";
import ViewCompletedOrder from "./screens/ViewCompletedOrder";
import CookedOrder from "./screens/CookedOrder";
import DeliveryPartner from "./screens/DeliveryPartner";
import AddDeliveryPartner from "./screens/AddDeliveryPartner";
import EditDeliveryPartner from "./screens/EditDeliveryPartner";
import Enquiry from "./screens/Enquiry";
import ViewEnquiry from "./screens/ViewEnquiry";
import ProductList from "./screens/ProductList";
import AddProduct from "./screens/AddProduct";
import EditProduct from "./screens/EditProduct";
import ComboList from "./screens/ComboList";
import AddCombo from "./screens/AddCombo";
import EditCombo from "./screens/EditCombo";
import CouponList from "./screens/CouponList";
import AddCoupon from "./screens/AddCoupon";
import EditCoupon from "./screens/EditCoupon";
import Slider from "./screens/Slider";
import AddSlider from "./screens/AddSlider";
import Blog from "./screens/Blog";
import AddBlog from "./screens/AddBlog";
import EditBlog from "./screens/EditBlog";
import Gallery from "./screens/Gallery";
import AddGallery from "./screens/AddGallery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginScreen } from "./screens/LoginScreen";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/customers" component={CustomerDetails} />
        <Route path="/viewcustomers" component={ViewCustomerDetails} />
        <Route path="/hub" component={HubDetails} />
        <Route path="/addhub" component={AddHub} />
        <Route path="/ongoing" component={OngoingOrder} />
        <Route path="/reject" component={RejectOrder} />
        <Route path="/viewreject" component={ViewRejectOrder} />
        <Route path="/completed" component={CompletedOrder} />
        <Route path="/viewcompleted" component={ViewCompletedOrder} />
        <Route path="/cooked" component={CookedOrder} />
        <Route path="/deliverypartner" component={DeliveryPartner} />
        <Route path="/adddeliverypartner" component={AddDeliveryPartner} />
        <Route path="/editdeliverypartner" component={EditDeliveryPartner} />
        <Route path="/enquiry" component={Enquiry} />
        <Route path="/viewenquiry" component={ViewEnquiry} />
        <Route path="/product" component={ProductList} />
        <Route path="/addproduct" component={AddProduct} />
        <Route path="/editproduct/:id/edit" component={EditProduct} />
        <Route path="/combo" component={ComboList} />
        <Route path="/addcombo" component={AddCombo} />
        <Route path="/editcombo" component={EditCombo} />
        <Route path="/coupon" component={CouponList} />
        <Route path="/addcoupon" component={AddCoupon} />
        <Route path="/editcoupon" component={EditCoupon} />
        <Route path="/slider" component={Slider} />
        <Route path="/addslider" component={AddSlider} />
        <Route path="/blog" component={Blog} />
        <Route path="/addblog" component={AddBlog} />
        <Route path="/editblog" component={EditBlog} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/addgallery" component={AddGallery} />
        <Route path="/login" component={LoginScreen} exact></Route>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
