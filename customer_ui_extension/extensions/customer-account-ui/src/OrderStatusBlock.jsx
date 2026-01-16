// @ts-nocheck
import '@shopify/ui-extensions/preact';
import {render} from "preact";
import {useState} from "preact/hooks";

export default async (...args) => {
  // Fallback to globalThis.shopify if args are empty (common in some preview modes)
  const api = args[0] || globalThis.shopify;
  render(<Extension api={api} />, document.body);
}

function Extension({api}) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Robust fallback: If api or order is missing, show "Current Order" instead of hiding
  const orderName = api?.order?.name || api?.order?.id || 'Current Order';

  return (
    <s-stack direction="block" spacing="base">
      <s-banner title="Help Center">
         Need help with {orderName}?
      </s-banner>
      
      <s-button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Support" : "Contact Support"}
      </s-button>
      
      {isOpen && (
        <s-banner title="Support Options" status="info">
             Email us about {orderName}.
             <s-button 
                href={`mailto:support@example.com?subject=Help with ${orderName}`}
             >
               Email Support
             </s-button>
        </s-banner>
      )}
    </s-stack>
  );
}