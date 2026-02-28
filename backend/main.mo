import Time "mo:core/Time";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type ServiceType = {
    #pressureWashing;
    #gutterCleaning;
    #lawnLandscaping;
  };

  type QuoteRequest = {
    name : Text;
    phone : Text;
    email : Text;
    service : ServiceType;
    message : Text;
    timestamp : Time.Time;
  };

  let quoteRequests = Map.empty<Text, QuoteRequest>();

  public shared ({ caller }) func submitQuoteRequest(name : Text, phone : Text, email : Text, service : ServiceType, message : Text) : async () {
    let timestamp = Time.now();
    let id = timestamp.toText();

    let quoteRequest : QuoteRequest = {
      name;
      phone;
      email;
      service;
      message;
      timestamp;
    };

    quoteRequests.add(id, quoteRequest);
  };

  public query ({ caller }) func getQuoteRequest(id : Text) : async QuoteRequest {
    switch (quoteRequests.get(id)) {
      case (null) { Runtime.trap("Quote request with id " # id # " does not exist.") };
      case (?quoteRequest) { quoteRequest };
    };
  };

  public query ({ caller }) func getAllQuoteRequests() : async [QuoteRequest] {
    quoteRequests.values().toArray();
  };
};
