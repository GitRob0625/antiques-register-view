import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/sonner';
import ProtectedRoute from '@/components/protected-route';
import AntiquesViewPage from '@/pages/antiques/antiques-view-page';
import LoginPage from '@/pages/login-page';
import MainPage from '@/pages/main-page';
import PurchaseCreatePage from '@/pages/purchase/purchase-create-page';
import PurchaseViewPage from '@/pages/purchase/purchase-view-page';
import SalesCreatePage from '@/pages/sales/sales-create-page';
import SalesViewPage from '@/pages/sales/sales-view-page';

export default function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
          {/* 未認証 */}
          <Route path="/" element={<LoginPage />} />

          {/* 認証済み */}
          <Route element={<ProtectedRoute />}>
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="antiques">
              <Route path="view" element={<AntiquesViewPage />} />
            </Route>
            <Route path="purchase">
              <Route path="create" element={<PurchaseCreatePage />} />
              <Route path="view" element={<PurchaseViewPage />} />
            </Route>
            <Route path="sales">
              <Route path="create" element={<SalesCreatePage />} />
              <Route path="view" element={<SalesViewPage />} />
            </Route>
          </Route>
      </Routes>
    </Router>
  );
}